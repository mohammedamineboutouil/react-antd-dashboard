import React, { useState } from "react";
import RoleCreateDialog from "./roleCreateDialog";
import RoleTable from "./roleTable";
import RoleSearch from "./roleSearch";
import RoleModifyDialog from "./roleModifyDialog";
import RoleAuthorizeDialog from "./roleAuthorizeDialog";

const RolePage = () => {
  const [mcreateVisible, setCreateVisible] = useState(false);
  const [modifyVisible, setModifyVisible] = useState(false);
  const [authorizeVisible, setAuthorizeVisible] = useState(false);
  const [values, setValues] = useState({});

  return (
    <div>
      <RoleSearch />
      <RoleCreateDialog
        visible={mcreateVisible}
        onCancel={() => setCreateVisible(false)}
        onCreate={() => setCreateVisible(false)}
      />
      <RoleModifyDialog
        values={values}
        visible={modifyVisible}
        onCancel={() => setModifyVisible(false)}
        onModify={() => setModifyVisible(false)}
      />
      <RoleAuthorizeDialog
        values={values}
        visible={authorizeVisible}
        onCancel={() => setAuthorizeVisible(false)}
        onAuthorize={() => setAuthorizeVisible(false)}
      />
      <RoleTable
        onCreate={() => setCreateVisible(true)}
        onModify={(values) => {
          setValues(values);
          setModifyVisible(true);
        }}
        onAuthorize={(values) => {
          setValues(values);
          setAuthorizeVisible(true);
        }}
      />
    </div>
  );
};

export default RolePage;
