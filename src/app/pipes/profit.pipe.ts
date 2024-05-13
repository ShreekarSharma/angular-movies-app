import { Pipe, PipeTransform } from "@angular/core";
@Pipe({name:'profit'})
export class ProfitPipe implements PipeTransform{
    transform(value: number, profitPercentage = 10):string {
        return (value*profitPercentage*1/100).toFixed(2);
    }
}