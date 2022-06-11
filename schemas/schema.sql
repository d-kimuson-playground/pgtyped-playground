CREATE TABLE service_user (
  id SERIAL NOT NULL,
  name VARCHAR(127) NOT NULL,
  email VARCHAR(127) NOT NULL,
  password VARCHAR(127) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
)

CREATE TABLE follow (
  from_user_id INTEGER NOT NULL,
  to_user_id INTEGER NOT NULL,
  FOREIGN KEY (from_user_id) REFERENCES service_user(id),
  FOREIGN KEY (to_user_id) REFERENCES service_user(id),

  PRIMARY KEY (from_user_id, to_user_id)
)
