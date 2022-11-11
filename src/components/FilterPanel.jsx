import { Badge } from "UI/Badge";
import { Card } from "UI/Card";
import { Stack } from "UI/Stack";
import { useSelector } from "react-redux";
import { getFilters } from "../features/filter/filter-slice";
import { useDispatch } from "react-redux";
import { clearFilters, removeFilter } from "../features/filter/filter-slice";

const FilterPanel = () => {
  const filters = useSelector(getFilters);
  const dispatch = useDispatch();

  const onBadgeClearBtnClickHandler = (filter) => {
    dispatch(removeFilter(filter));
  };

  const onClearBtnClickHandler = () => {
    dispatch(clearFilters());
  };

  if (filters.length === 0) return null;

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {filters.map((item) => (
            <Badge
              key={item}
              variant="clearable"
              onClear={onBadgeClearBtnClickHandler.bind(null, item)}
            >
              {item}
            </Badge>
          ))}
        </Stack>

        <button className="link" onClick={onClearBtnClickHandler}>
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
