import {
  BaseSource,
  Item,
} from "https://deno.land/x/ddc_vim@v3.4.0/types.ts";
import {
  Denops,
} from "https://deno.land/x/ddc_vim@v3.4.0/deps.ts";

type Params = Record<never, never>;

export class Source extends BaseSource<Params> {
  _cache: Item[];

  override async onInit(args: {
    denops: Denops;
  }): Promise<void> {
    await args.denops.call('necosyntax#initialize');
    const words =  await args.denops.call('necosyntax#gather_candidates') as string[];
    this._cache = words.map((word) => ({word})) as Item[];
  }

  override async gather(args: {
    denops: Denops;
  }): Promise<Item[]> {
    return this._cache;
  }

  override params(): Params {
    return {};
  }
}