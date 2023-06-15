extends CharacterBody2D


@export var speed : float = 300.0
@export var jump_velocity : float = -400.0
@export var double_jump : float = -200.0

# Grab node
@onready var animated_sprite : AnimatedSprite2D = $AnimatedSprite2D
# Get the gravity from the project settings to be synced with RigidBody nodes.
var gravity = ProjectSettings.get_setting("physics/2d/default_gravity")
var has_doubled : bool = false
var anim_locked : bool = false
var direction : Vector2 = Vector2.ZERO

func _physics_process(delta):
	# Add the gravity.
	if not is_on_floor():
		velocity.y += gravity * delta
	else:
		has_doubled = false

	# Handle Jump.
	if Input.is_action_just_pressed("jump"):
		if is_on_floor():
			# normal jump
			velocity.y = jump_velocity
		elif !has_doubled:
			# double jump
			velocity.y = double_jump
			has_doubled = true
		
	# Descend
	if Input.is_action_just_pressed("move_down") and !is_on_floor():
		velocity.y = Input.get_action_strength("move_down") * (speed * 2)

	# Get the input direction and handle the movement/deceleration.
	# As good practice, you should replace UI actions with custom gameplay actions.
	direction = Input.get_vector("move_left", "move_right", "jump", "move_down")
	if direction:
		velocity.x = direction.x * speed
	else:
		velocity.x = move_toward(velocity.x, 0, speed)

	move_and_slide()

func update_animation():
	if not anim_locked:
		if direction.x != 0 and is_on_floor():
			if direction.x < 0:
				animated_sprite.flip_h = true
			else:
				animated_sprite.flip_h = false
			animated_sprite.play("run")
		elif direction.y != 0 and !is_on_floor():
			if direction.y < 0:
				animated_sprite.play("jumpstart")
			else:
				animated_sprite.play("jumpend")
		else:
			animated_sprite.play("idle")

func _process(delta):
	update_animation()
