export interface UiTableProps {
  headers: string[];
  rows: any[][];
  striped?: boolean;
  bordered?: boolean;
  hover?: boolean;
}

export interface UiTableEmits {
  (event: 'row-click', row: any[], index: number): void;
  (event: 'header-click', header: string, index: number): void;
}
