import type { ChartConfiguration, ChartType, ChartData, ChartOptions } from 'chart.js';

export interface UiChartProps {
  type: ChartType;
  data: ChartData;
  options?: ChartOptions;
  width?: number;
  height?: number;
  responsive?: boolean;
  maintainAspectRatio?: boolean;
}

export interface UiChartEmits {
  (event: 'chart-created', chart: any): void;
  (event: 'chart-updated', chart: any): void;
  (event: 'chart-destroyed'): void;
}