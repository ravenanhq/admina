import * as React from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import {
  Card,
  Divider,
  Typography,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import listData from "./list.json";

interface ListItemType {
  id: number;
  text: string;
  avatar: string;
}

function not(
  a: readonly ListItemType[],
  b: readonly ListItemType[]
): readonly ListItemType[] {
  return a.filter((value) => !b.includes(value));
}

function intersection(
  a: readonly ListItemType[],
  b: readonly ListItemType[]
): readonly ListItemType[] {
  return a.filter((value) => b.includes(value));
}

const TransferListwithIcon = () => {
  const [checked, setChecked] = React.useState<readonly ListItemType[]>([]);
  const [left, setLeft] = React.useState<readonly ListItemType[]>([]);
  const [right, setRight] = React.useState<readonly ListItemType[]>([]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  React.useEffect(() => {
    const data: ListItemType[] = listData;
    const half = Math.ceil(data.length / 2);
    setLeft(data.slice(0, half));
    setRight(data.slice(half));
  }, []);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value: ListItemType) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    const leftCheckedItems = leftChecked;
    setRight(right.concat(leftCheckedItems));
    setLeft(not(left, leftCheckedItems));
    setChecked(not(checked, leftCheckedItems));
  };

  const handleCheckedLeft = () => {
    const rightCheckedItems = rightChecked;
    setLeft(left.concat(rightCheckedItems));
    setRight(not(right, rightCheckedItems));
    setChecked(not(checked, rightCheckedItems));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const customList = (items: readonly ListItemType[]) => (
    <Paper
      sx={{
        width: 200,
        height: 230,
        overflow: "auto",
        boxShadow: "none",
        border: "1px solid #ccc",
      }}
    >
      <List dense component="div" role="list">
        {items.map((item) => {
          const labelId = `transfer-list-item-${item.id}-label`;

          return (
            <ListItemButton
              key={item.id}
              role="listitem"
              onClick={handleToggle(item)}
            >
              <ListItemIcon>
                <Avatar alt={item.text} src={item.avatar} />
              </ListItemIcon>
              <ListItemText id={labelId} primary={item.text} />
              <ListItemIcon>
                <Checkbox
                  checked={checked.includes(item)}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    "aria-labelledby": labelId,
                  }}
                />
              </ListItemIcon>
            </ListItemButton>
          );
        })}
      </List>
    </Paper>
  );

  return (
    <Card sx={{ paddingBottom: "20px" }}>
      <Typography sx={{ padding: "15px" }}>TransferList With Icon</Typography>
      <Divider sx={{ margin: "0 20px 10px 20px", padding: "0 10px" }} />
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        flexDirection={isMobile ? "column" : "row"}
      >
        <Grid item>{customList(left)}</Grid>
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleAllRight}
              disabled={left.length === 0}
              aria-label="move all right"
            >
              ≫
            </Button>
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleCheckedRight}
              disabled={leftChecked.length === 0}
              aria-label="move selected right"
            >
              &gt;
            </Button>
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleCheckedLeft}
              disabled={rightChecked.length === 0}
              aria-label="move selected left"
            >
              &lt;
            </Button>
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleAllLeft}
              disabled={right.length === 0}
              aria-label="move all left"
            >
              ≪
            </Button>
          </Grid>
        </Grid>
        <Grid item>{customList(right)}</Grid>
      </Grid>
    </Card>
  );
};

export default TransferListwithIcon;
