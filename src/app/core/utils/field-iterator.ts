export function FieldIterator(obj: any, target: string = ''): any[] {
    const cols: any[] = [];
    const keys = Object.keys(obj);
    for (const el of keys) {
      if (obj[el][target] !== false) {
        obj[el].property = el;
        if (obj[el].type === undefined) {
            if ('options' in obj[el]) {
                obj[el].type = 'select';
            }
            else {
                obj[el].type = 'text';
            }
        }
        if (obj[el].required === undefined) {
            obj[el].required = false;
        }
        cols.push(obj[el]);
      }
    }
    return cols;
}
