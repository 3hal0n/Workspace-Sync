1. Backend (Java + Spring Boot + MongoDB)
Java interviews focus heavily on how you structure your code. Use the Controller-Service-Repository pattern.

Entities:

Project: String id, String name, String status, LocalDateTime createdAt.

Task: String id, String projectId, String title, Status status (Enum).

WorkLog: String id, String taskId, int minutes, LocalDate date.

Key Features/Endpoints:

Aggregation Endpoint: A GET request that uses MongoDB's aggregation pipeline (or Java logic) to calculate the three numbers on your Figma cards (Active Projects, Ongoing Tasks, Total Hours).

Search & Filter: A GET request with query parameters to search projects by name (for the search bar in your Figma).

Custom Exception Handling: Use @ControllerAdvice to return clean JSON error messages if a project isn't found.