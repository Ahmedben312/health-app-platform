// Standard API response format
declare interface ApiResponse<T> {
  data: T;
  error: string | null;
  timestamp: Date;
}
