export interface UiModalProps {
  show?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  title?: string;
  description?: string;
  closeable?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  persistent?: boolean;
  scrollable?: boolean;
  centered?: boolean;
}

export interface UiModalEmits {
  close: [];
  open: [];
  'update:show': [show: boolean];
}
