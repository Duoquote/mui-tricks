import React, { useState } from "react";

import { TextField, Select, MenuItem, FormControl, InputLabel, IconButton } from "@mui/material";
import { MdEdit, MdSave } from "react-icons/md";

export const code = `const EditableSelectBox = ({
  value, onChange = () => { }
}) => {

  const [isEditing, setIsEditing] = useState(false);

  return (
    <React.Fragment>
      {
        isEditing ? (
          <TextField
            label="Select With Edit"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            variant="outlined"
            fullWidth
            size="small"
            InputProps={{
              endAdornment: (
                <IconButton
                  size="small"
                  edge="start"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <MdSave fontSize={24} />
                </IconButton>
              )
            }}
          />
        ) : (
          <FormControl fullWidth size="small">
            <InputLabel id="select-label">Select With Edit</InputLabel>
            <Select
              labelId="select-label"
              label="Select With Edit"
              id="select"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              renderValue={(value) => value}
              IconComponent={() => null}
              endAdornment={
                <IconButton
                  size="small"
                  edge="start"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <MdEdit fontSize={24} />
                </IconButton>
              }
            >
              {
                ["One", "Two", "Three"].map((item, index) => (
                  <MenuItem
                    key={index}
                    value={item}
                  >
                    {item}
                  </MenuItem>
                ))
              }
            </Select>
          </FormControl>
        )
      }
    </React.Fragment>
  )
};

const Showcase = () => {
  const [value, setValue] = useState("One");

  return (
    <EditableSelectBox
      value={value}
      onChange={(value) => setValue(value)}
    />
  )
};

render(<Showcase />);
`

export const scope = { useState, Select, MenuItem, FormControl, InputLabel, IconButton, MdEdit, TextField, MdSave };
export const name = "Editable Select Box";
export const editorWidth = 8;