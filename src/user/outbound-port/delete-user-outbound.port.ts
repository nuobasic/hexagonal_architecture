export type DeleteUserOutboundPortInputDto = {
  userId: number;
};

export type DeleteUserOutboundPortOutputDto = unknown;

export const DELETE_USER_OUTBOUND_PORT = 'DELETE_USER_OUTBOUND_PORT ' as const;

export interface DeleteUserOutboundPort {
  excute(
    params: DeleteUserOutboundPortInputDto,
  ): Promise<DeleteUserOutboundPortOutputDto>;
}
