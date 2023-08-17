import * as React from "react";
import { Edit, SimpleForm, EditProps, BooleanInput } from "react-admin";

export const ProductimageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <BooleanInput label="singletone" source="singletone" />
      </SimpleForm>
    </Edit>
  );
};
