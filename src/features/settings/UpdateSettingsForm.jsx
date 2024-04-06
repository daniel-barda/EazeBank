import { useState } from "react";
import useUpdateUser from "../auth/useUpdateUser";

import Input from "@mui/joy/Input";
import Button from "@mui/material/Button";
import UpdateIcon from "@mui/icons-material/Update";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import styled from "styled-components";
import Form, { StyledFormGroup } from "../../ui/Form";
import { useUser } from "../auth/useUser";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function UpdateSettingsForm() {
  const { user } = useUser();
  const { fullName: currentfullName } = user.user_metadata;

  const [fullName, setFullname] = useState(currentfullName);
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const { updateUser, isUpdating } = useUpdateUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName && !password) return;

    if (fullName) updateUser({ fullName, avatar });
    if (password) updateUser({ password, avatar });
    if (fullName && password) updateUser({ fullName, password, avatar });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <StyledFormGroup>
        <Form.FormLabel label="update fullName" />
        <Input
          color="primary"
          disabled={isUpdating}
          size="lg"
          variant="soft"
          sx={{ width: 200 }}
          id="update fullName"
          onChange={(e) => setFullname(e.target.value)}
          value={fullName}
        />
      </StyledFormGroup>

      <StyledFormGroup>
        <Form.FormLabel label="update password" />
        <Input
          color="primary"
          disabled={isUpdating}
          size="lg"
          variant="soft"
          sx={{ width: 200 }}
          id="update password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </StyledFormGroup>

      <StyledFormGroup>
        <Button
          disabled={isUpdating}
          component="label"
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          role="button"
          onChange={(e) => setAvatar(e.target.files[0])}
        >
          {!avatar?.name ? "Upload file" : avatar?.name}
          <VisuallyHiddenInput type="file" />
        </Button>
      </StyledFormGroup>

      <Button
        type="submit"
        sx={{
          height: 35,
          fontSize: 14,
          alignItems: "center",
          backgroundColor: "#263238",
        }}
        variant="contained"
        disabled={isUpdating}
        endIcon={<UpdateIcon />}
      >
        {!isUpdating ? "Update" : "Updating"}
      </Button>
    </Form>
  );
}

export default UpdateSettingsForm;
