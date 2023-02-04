import {
  BaseSource,
  DdcOptions,
  Item,
  SourceOptions,
} from "https://deno.land/x/ddc_vim@v3.2.0/types.ts";
import {
  Denops,
} from "https://deno.land/x/ddc_vim@v3.2.0/deps.ts";

type Params = Record<never, never>;

export class Source extends BaseSource<Params> {
  override async gather(args: {
    denops: Denops;
    options: DdcOptions;
    sourceOptions: SourceOptions;
    sourceParams: Params;
    completeStr: string;
  }): Promise<Item[]> {
    const words =  await args.denops.call('necosyntax#gather_candidates') as string[];
    return words.map((word) => ({word})) as Item[];
  }

  override params(): Params {
    return {};
  }
}