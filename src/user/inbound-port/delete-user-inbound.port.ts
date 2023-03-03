export type DeleteUserInboundPortInputDto = {
  userId: number;
};
export type DeleteUserInboundPortOutputDto = unknown;
export const DELETE_USER_INBOUND_PORT = 'DELETE_USER_INBOUND_PORT' as const;

export interface DeleteUserInboundPort {
  execute(
    params: DeleteUserInboundPortInputDto,
  ): Promise<DeleteUserInboundPortOutputDto>;
}
