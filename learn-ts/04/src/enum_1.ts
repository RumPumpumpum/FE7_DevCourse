// 1번
{
  const enum Week {
    MONDAY = 1,
    TUESDAY = 2,
    WEDNESDAY = 3,
    THURSDAY = 4,
    FRIDAY = 5,
    SATURDAY = 6,
    SUNDAY = 7,
  }

  function getDayName(day: number): string {
    if (day === Week.MONDAY) return "Monday";
    if (day === Week.TUESDAY) return "Tuesday";
    if (day === Week.WEDNESDAY) return "Wednesday";
    if (day === Week.THURSDAY) return "Thursday";
    if (day === Week.FRIDAY) return "Friday";
    if (day === Week.SATURDAY) return "Saturday";
    if (day === Week.SUNDAY) return "Sunday";
    return "Invalid day";
  }
}

// 2번
{
  const enum Status {
    SUCCESS = 200,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500,
  }

  function getStatusMessage(status: Status): string {
    if (status === Status.SUCCESS) return "Success";
    if (status === Status.NOT_FOUND) return "Not Found";
    if (status === Status.INTERNAL_ERROR) return "Internal Server Error";
    return "Unknown Status";
  }
}

// 3번
{
  const enum Zip {
    SEOUL = "Seoul",
    BUSAN = "City",
    DAEGU = "Daegu",
  }

  function getCityByZip(zip: Zip): string {
    if (zip === Zip.SEOUL) return Zip.SEOUL;
    if (zip === Zip.BUSAN) return Zip.BUSAN;
    if (zip === Zip.DAEGU) return Zip.DAEGU;
    return "Unknown City";
  }
}

// 4번
{
  const enum Auth {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest",
  }
  function getPermissionLevel(role: Auth): string {
    if (role === Auth.ADMIN) return "Full access";
    if (role === Auth.USER) return "Limited access";
    if (role === Auth.GUEST) return "Guest access";
    return "No access";
  }
}

// 5번
{
  const enum Status {
    PENDING = 1,
    SHIPPED = 2,
    DELIVERED = 3,
  }

  function getProductStatus(status: Status): string {
    if (status === Status.PENDING) return "Pending";
    if (status === Status.SHIPPED) return "Shipped";
    if (status === Status.DELIVERED) return "Delivered";
    return "Unknown Status";
  }
}

// 6번
{
  const enum Status {
    ORDER_PLACED = "Order Placed",
    PAYMENT_PENDING = "Payment Pending",
    SHIPPED = "Shipped",
    DELIVERED = "Delivered",
  }
  function getOrderStatus(status: Status): string {
    if (status === Status.ORDER_PLACED) return "Your order has been placed.";
    if (status === Status.PAYMENT_PENDING) return "Payment is pending.";
    if (status === Status.SHIPPED) return "Your order has been shipped.";
    if (status === Status.DELIVERED) return "Your order has been delivered.";
    return "Unknown Status";
  }
}

// 7번
{
  enum Status {
    IS_ACTIVE = "true",
    IS_INACTIVE = "false",
  }
  function toggleStatus(status: Status): boolean {
    return status === Status.IS_ACTIVE ? true : false;
  }
}

// 8번
{
  const enum Option {
    OPTION_ONE = "Option 1",
    OPTION_TWO = "Option 2",
    OPTION_THREE = "Option 3",
  }

  function getOptionValue(option: Option): string {
    if (option === Option.OPTION_ONE) return "You selected Option 1.";
    if (option === Option.OPTION_TWO) return "You selected Option 2.";
    if (option === Option.OPTION_THREE) return "You selected Option 3.";
    return "Invalid option";
  }
}

// 9번
{
  const enum Meal {
    BREAKFAST = "Breakfast",
    LUNCH = "Lunch",
    DINNER = "Dinner",
  }
  function getMealTime(meal: Meal): string {
    if (meal === Meal.BREAKFAST) return "Good morning, it's breakfast time!";
    if (meal === Meal.LUNCH) return "Good afternoon, it's lunch time!";
    if (meal === Meal.DINNER) return "Good evening, it's dinner time!";
    return "Invalid meal time";
  }
}

// 10번
{
  const enum Status {
    LOGGED_IN,
    LOGGED_OUT,
  }

  function checkLoginStatus(status: Status): string {
    if (status === Status.LOGGED_IN) return "You are logged in.";
    if (status === Status.LOGGED_OUT) return "You are logged out.";
    return "Unknown status";
  }
}

// 10번 - 최신 트렌드
{
  const Status = {
    LOGGED_IN: "LOGGED_IN",
    LOGGED_OUT: "LOGGED_OUT",
  };

  type Status = (typeof Status)[keyof typeof Status];

  function checkLoginStatus(status: Status): string {
    if (status === Status.LOGGED_IN) return "You are logged in.";
    if (status === Status.LOGGED_OUT) return "You are logged out.";
    return "Unknown status";
  }

  console.log(checkLoginStatus(Status.LOGGED_IN));
  console.log(checkLoginStatus(Status.LOGGED_OUT));
}
