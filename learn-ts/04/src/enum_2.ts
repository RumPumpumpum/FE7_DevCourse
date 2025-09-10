// 1번
{
  const enum Status {
    UNVERIFIED = "UNVERIFIED",
    PENDING = "PENDING",
    VERIFIED = "VERIFIED",
  }
  function getUserStatus(status: Status): string {
    if (status === Status.UNVERIFIED) return "User is unverified";
    if (status === Status.PENDING) return "User verification is pending";
    if (status === Status.VERIFIED) return "User is verified";
    return "Unknown status";
  }
}

// 2번
{
  const enum Status {
    INITIATED = 0,
    PROCESSING = 1,
    SHIPPED = 2,
    DELIVERED = 3,
    CANCELLED = 4,
  }
  function getOrderState(state: Status): string {
    if (state === Status.INITIATED) return "Order initiated";
    if (state === Status.PROCESSING) return "Order being processed";
    if (state === Status.SHIPPED) return "Order shipped";
    if (state === Status.DELIVERED) return "Order delivered";
    if (state === Status.CANCELLED) return "Order cancelled";
    return "Unknown state";
  }
}
