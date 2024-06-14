import { IconButton, Typography } from "@mui/material";
import {
  Add as AddIcon,
  KeyboardArrowLeft as KeyboardArrowLeftIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon,
} from "@mui/icons-material";
import { useKanbanContext } from "../KanbanBoardswimlane/KanbanContext";

interface Column {
  id: string;
  title: string;
  order: number;
}
interface ColumnProps {
  columns: Column[];
  onAddTask: (columnId: string) => void;
}

const ColumnHeader: React.FC<ColumnProps> = ({ columns, onAddTask }) => {
  const { highlightedColumns, toggleHighlightColumn } = useKanbanContext();

  return (
    <div
      style={{
        padding: "0 8px",
        marginTop: "8px",
        borderRadius: "4px",
        transition: "all .1s linear",
        height: "100%",
        gap: "10px",
        display: "flex",
        flexDirection: "row",
        boxShadow: "none",
        backgroundColor: "transparent",
        position: "sticky",
        top: "0px",
        zIndex: 2,
      }}
    >
      {columns.map((column, index) => {
        const selectedColumn = highlightedColumns.includes(column.id);
        return (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: selectedColumn ? "50px" : "300px",
              minWidth: selectedColumn ? "50px" : "250px",
              padding: selectedColumn ? " 8px" : "8px ",
              flexBasis: selectedColumn ? "50px" : "292px",
              flexGrow: 0,
              flexShrink: 0,
              height: "36px",
              marginBottom: "8px",
              position: "sticky",
              top: "0",
              backgroundColor: "#d8dee9",
              borderRadius: "4px",
              zIndex: "1",
            }}
          >
            <Typography
              variant="body2"
              style={{
                fontSize: "14px",
                fontWeight: "500",
                display: selectedColumn ? "none" : "block",
              }}
            >
              {column.title}
            </Typography>
            <div>
              <IconButton
                style={{ padding: "4px" }}
                onClick={() => toggleHighlightColumn(column.id)}
              >
                {selectedColumn ? (
                  <KeyboardArrowRightIcon />
                ) : (
                  <KeyboardArrowLeftIcon />
                )}
              </IconButton>
              <IconButton
                style={{
                  padding: "4px",
                  display: selectedColumn ? "none" : "",
                }}
                onClick={() => onAddTask(column.id)}
              >
                <AddIcon />
              </IconButton>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ColumnHeader;
