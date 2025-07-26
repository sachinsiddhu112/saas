export const getPriorityColor = (priority: string, status: string) => {
  if (status === "success") {
    switch (priority) {
      case "high":
        return "bg-green-500";
      case "medium":
        return "bg-blue-500";
      case "low":
        return "bg-purple-500";
      default:
        return "bg-gray-400";
    }
  } else if (status === "warning") {
    switch (priority) {
      case "high":
        return "bg-yellow-500";
      case "medium":
        return "bg-orange-500";
      case "low":
        return "bg-gray-300";
      default:
        return "bg-gray-300";
    }
  } else {
    return "bg-red-700";
  }
};
export const getTypeColor = (type: string) => {
  switch (type) {
    case "schedule":
      return "bg-blue-100 text-blue-600";
    case "upload":
      return "bg-green-100 text-green-600";
    case "notice":
      return "bg-yellow-100 text-yellow-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

export const getSecondSegment = (url: string) => {
  const segments = url.split("/").filter(Boolean); // removes empty strings
  const dashboardIndex = segments.indexOf("dashboard");

  if (dashboardIndex !== -1 && segments[dashboardIndex + 1]) {
    return segments[dashboardIndex + 1];
  }
  return "dashboard";
};
