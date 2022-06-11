/* @name findServiceUserById */
SELECT * FROM service_user WHERE id = :userId;

/* @name fetchFollowUsers */
SELECT to_user.*
FROM service_user
INNER JOIN follow
  ON service_user.id = follow.from_user_id
LEFT JOIN service_user as to_user
  ON follow.to_user_id = to_user.id
WHERE service_user.id = :userId;
