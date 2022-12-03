export interface LineChartConfig<T> {
  getLabel(el: T): string;
  getValue(el: T): number;
}
