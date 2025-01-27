import { type Static, type TSchema, t } from "elysia";

const Nullable = <T extends TSchema>(schema: T) => t.Union([schema, t.Null()]);

export const ApiResponsePagination = t.Object({
	page: t.Number(),
	take: t.Number(),
	itemCount: t.Number(),
	pageCount: t.Number(),
	hasPreviousPage: t.Boolean(),
	hasNextPage: t.Boolean(),
});

export const ApiResponseSchema = <T extends TSchema>(T: T) =>
	t.Object({
		data: T,
		meta: t.Object({
			code: t.Number(),
			status: t.String(),
			message: t.String(),
			pagination: Nullable(ApiResponsePagination),
		}),
	});

export const ApiErrorResponseSchema = t.Object({
	code: t.Number(),
	status: t.String(),
	message: t.String(),
	// cause: t.String(),
});

export type ApiResponse<T extends TSchema> = Static<
	ReturnType<typeof ApiResponseSchema<T>>
>;

export type ApiErrorResponse = Static<typeof ApiErrorResponseSchema>;
