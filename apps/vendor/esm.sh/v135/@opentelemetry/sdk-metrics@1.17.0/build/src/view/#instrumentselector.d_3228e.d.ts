import { InstrumentType } from '../InstrumentDescriptor.d.ts';
import { Predicate } from './Predicate.d.ts';
export interface InstrumentSelectorCriteria {
    name?: string;
    type?: InstrumentType;
    unit?: string;
}
export declare class InstrumentSelector {
    private _nameFilter;
    private _type?;
    private _unitFilter;
    constructor(criteria?: InstrumentSelectorCriteria);
    getType(): InstrumentType | undefined;
    getNameFilter(): Predicate;
    getUnitFilter(): Predicate;
}
//# sourceMappingURL=InstrumentSelector.d.ts.map
