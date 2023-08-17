import * as React from "react";
import { Create, SimpleForm, CreateProps, BooleanInput } from "react-admin";

export const ProductimageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <BooleanInput label="singletone" source="singletone" />
      </SimpleForm>
    </Create>
  );
};
