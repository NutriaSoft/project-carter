import { forwardRef } from "react";
import {
	FixedCropper,
	type FixedCropperProps,
	type FixedCropperRef,
	ImageRestriction,
} from "react-advanced-cropper";

export type CustomCropperProps = FixedCropperProps;

export type CustomCropperRef = FixedCropperRef;

export const CustomCropper = forwardRef<CustomCropperRef, CustomCropperProps>(
	({ stencilProps, ...props }: CustomCropperProps, ref) => {
		return (
			<FixedCropper
				ref={ref}
				stencilProps={{
					handlers: false,
					lines: false,
					movable: false,
					resizable: false,
					...stencilProps,
				}}
				imageRestriction={ImageRestriction.stencil}
				{...props}
			/>
		);
	},
);

CustomCropper.displayName = "CustomCropper";
