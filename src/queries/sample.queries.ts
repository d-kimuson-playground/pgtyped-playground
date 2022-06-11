/** Types generated for queries found in "src/queries/sample.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'FindServiceUserById' parameters type */
export interface IFindServiceUserByIdParams {
  userId: number | null | void;
}

/** 'FindServiceUserById' return type */
export interface IFindServiceUserByIdResult {
  created_at: Date;
  email: string;
  id: number;
  name: string;
  password: string;
  updated_at: Date;
}

/** 'FindServiceUserById' query type */
export interface IFindServiceUserByIdQuery {
  params: IFindServiceUserByIdParams;
  result: IFindServiceUserByIdResult;
}

const findServiceUserByIdIR: any = {"usedParamSet":{"userId":true},"params":[{"name":"userId","required":false,"transform":{"type":"scalar"},"locs":[{"a":38,"b":44}]}],"statement":"SELECT * FROM service_user WHERE id = :userId"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM service_user WHERE id = :userId
 * ```
 */
export const findServiceUserById = new PreparedQuery<IFindServiceUserByIdParams,IFindServiceUserByIdResult>(findServiceUserByIdIR);


/** 'FetchFollowUsers' parameters type */
export interface IFetchFollowUsersParams {
  userId: number | null | void;
}

/** 'FetchFollowUsers' return type */
export interface IFetchFollowUsersResult {
  created_at: Date;
  email: string;
  id: number;
  name: string;
  password: string;
  updated_at: Date;
}

/** 'FetchFollowUsers' query type */
export interface IFetchFollowUsersQuery {
  params: IFetchFollowUsersParams;
  result: IFetchFollowUsersResult;
}

const fetchFollowUsersIR: any = {"usedParamSet":{"userId":true},"params":[{"name":"userId","required":false,"transform":{"type":"scalar"},"locs":[{"a":190,"b":196}]}],"statement":"SELECT to_user.*\nFROM service_user\nINNER JOIN follow\n  ON service_user.id = follow.from_user_id\nLEFT JOIN service_user as to_user\n  ON follow.to_user_id = to_user.id\nWHERE service_user.id = :userId"};

/**
 * Query generated from SQL:
 * ```
 * SELECT to_user.*
 * FROM service_user
 * INNER JOIN follow
 *   ON service_user.id = follow.from_user_id
 * LEFT JOIN service_user as to_user
 *   ON follow.to_user_id = to_user.id
 * WHERE service_user.id = :userId
 * ```
 */
export const fetchFollowUsers = new PreparedQuery<IFetchFollowUsersParams,IFetchFollowUsersResult>(fetchFollowUsersIR);


