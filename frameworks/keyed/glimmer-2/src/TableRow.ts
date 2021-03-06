import { on } from '@glimmer/modifier';
import { createTemplate, setComponentTemplate, templateOnlyComponent } from '@glimmer/core';

export default setComponentTemplate(
  createTemplate(
    { on },
    `<tr class={{if @item.selected "danger"}}><td class="col-md-1">{{@item.id}}</td><td class="col-md-4"><a {{on 'click' @onSelect}}>{{@item.label}}</a></td><td class="col-md-1"><a {{on 'click' @onRemove}}><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a></td><td class="col-md-6"></td></tr>`
  ),
  templateOnlyComponent()
);
