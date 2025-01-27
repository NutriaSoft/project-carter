import {
	MagnifyingGlassMinusIcon,
	MagnifyingGlassPlusIcon,
} from "@heroicons/react/24/solid";
import { isNumber } from "advanced-cropper";
import cn from "classnames";
import type { FC } from "react";
import { SliderCropper } from "./SliderCropper";
import "./NavigationCropper.css";

interface Props {
	zoom?: number;
	onZoom?: (value: number, transitions?: boolean) => void;
	className?: string;
	disabled?: unknown;
}

export const Navigation: FC<Props> = ({ className, onZoom, zoom }) => {
	const onZoomIn = () => {
		if (onZoom && isNumber(zoom)) {
			onZoom(Math.min(1, zoom + 0.25), true);
		}
	};

	const onZoomOut = () => {
		if (onZoom && isNumber(zoom)) {
			onZoom(Math.max(0, zoom - 0.25), true);
		}
	};

	return (
		<div className={cn("absolute-zoom-cropper-navigation", className)}>
			<button
				type="button"
				className="absolute-zoom-cropper-navigation__button"
				onClick={onZoomOut}
			>
				<MagnifyingGlassMinusIcon />
			</button>
			<SliderCropper
				value={zoom}
				onChange={onZoom}
				className="absolute-zoom-cropper-navigation__slider"
			/>
			<button
				type="button"
				className="absolute-zoom-cropper-navigation__button"
				onClick={onZoomIn}
			>
				<MagnifyingGlassPlusIcon />
			</button>
		</div>
	);
};
