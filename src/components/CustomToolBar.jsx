import { Tooltip, Typography } from "@mui/material";
import {
  ColumnsPanelTrigger,
  FilterPanelTrigger,
  Toolbar,
  ToolbarButton,
} from "@mui/x-data-grid";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import FilterListIcon from "@mui/icons-material/FilterList";

const CustomToolBar = () => {
  return (
    <Toolbar color="#fff">
      <Typography fontWeight="medium" sx={{ flex: 1, mx: 0.5 }}>
        Toolbar
      </Typography>
      <Tooltip title="Columns">
        <ColumnsPanelTrigger render={<ToolbarButton />}>
          <ViewColumnIcon />
        </ColumnsPanelTrigger>
      </Tooltip>
      <Tooltip title="Filters">
        <FilterPanelTrigger
          render={
            <ToolbarButton>
              <FilterListIcon />
            </ToolbarButton>
          }
        ></FilterPanelTrigger>
      </Tooltip>
    </Toolbar>
  );
};

export default CustomToolBar;
