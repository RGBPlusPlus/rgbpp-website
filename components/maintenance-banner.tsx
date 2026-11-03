import { TriangleAlert } from "lucide-react";

// 维护期间设为 true，服务恢复后改为 false 即可隐藏 banner
export const SHOW_MAINTENANCE_BANNER = true;

export default function MaintenanceBanner() {
  if (!SHOW_MAINTENANCE_BANNER) return null;

  // lg 及以上固定 40px 高度，doc-layout 侧边栏的 top 偏移依赖这个高度
  return (
    <div role="status" className="border-b border-amber-500/30 bg-amber-500/10 lg:h-10">
      <div className="mx-auto px-6 py-2 lg:py-0 h-full flex items-center justify-center gap-2 text-sm text-amber-200">
        <TriangleAlert className="w-4 h-4 flex-shrink-0 text-amber-400" />
        <p>
          <span className="font-semibold text-amber-300">Under Maintenance:</span>{" "}
          Some RGB++ services and features may be unavailable.
        </p>
      </div>
    </div>
  );
}
