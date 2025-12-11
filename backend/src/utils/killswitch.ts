import type { Request, Response, NextFunction } from "express";

interface KillSwitchStatus {
  active: boolean;
  activatedAt: Date | null;
  reason: string;
}

class KillSwitch {
  private isActive: boolean = false;
  private activatedAt: Date | null = null;
  private reason: string = "";

  activate(reason: string = "Emergency shutdown"): void {
    this.isActive = true;
    this.activatedAt = new Date();
    this.reason = reason;
    console.error(
      `[KILLSWITCH] ACTIVATED at ${this.activatedAt.toISOString()} - Reason: ${reason}`
    );
  }

  deactivate(): void {
    console.log(`[KILLSWITCH] DEACTIVATED at ${new Date().toISOString()}`);
    this.isActive = false;
    this.activatedAt = null;
    this.reason = "";
  }

  getStatus(): KillSwitchStatus {
    return {
      active: this.isActive,
      activatedAt: this.activatedAt,
      reason: this.reason,
    };
  }

  middleware() {
    return (req: Request, res: Response, next: NextFunction) => {
      if (this.isActive && req.path.includes("/fragrance/reviews")) {
        console.warn(
          `[KILLSWITCH] Blocked request from ${req.ip} to ${req.path}`
        );
        return res.status(503).json({
          error: "Service temporarily unavailable for maintenance",
          code: "SERVICE_UNAVAILABLE",
          info: this.reason,
        });
      }
      next();
    };
  }
}

export const killSwitch = new KillSwitch();

export const checkKillSwitch = killSwitch.middleware();
export const activateKillSwitch = (reason?: string) =>
  killSwitch.activate(reason);
export const deactivateKillSwitch = () => killSwitch.deactivate();
export const getKillSwitchStatus = (): KillSwitchStatus =>
  killSwitch.getStatus();
