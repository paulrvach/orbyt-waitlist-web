/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { SimpleIcon } from "simple-icons";
import {
  siCanvas,
  siDiscord,
  siGithub,
  siGoogledocs,
  siNotion,
} from "simple-icons";

export { siCanvas, siDiscord, siGithub, siGoogledocs, siNotion };

export function BrandIcon({
  icon,
  className,
  monochrome,
}: {
  icon: SimpleIcon;
  className?: string;
  /** Use currentColor (for dark/light surfaces) */
  monochrome?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      role="img"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={monochrome ? "currentColor" : `#${icon.hex}`}
        d={icon.path}
      />
    </svg>
  );
}

/** Apple Calendar–style mark (not in Simple Icons as a single mark) */
export function AppleCalendarMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      role="img"
      aria-label="Apple Calendar"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="5" className="fill-white dark:fill-zinc-900" />
      <path d="M0 0h24v7H0z" className="fill-[#FF3B30]" />
      <path
        d="M6 11h3M12 11h6M6 15h12M6 19h8"
        fill="none"
        strokeWidth="1.2"
        strokeLinecap="round"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}
