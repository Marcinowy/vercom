export interface LineChartConfig<T> {
  label: string;
  getLabel(el: T): string;
  getValue(el: T): number;
}
