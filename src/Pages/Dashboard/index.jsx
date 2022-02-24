import React from "react";
import styled from "styled-components";
import Avatar from "@atlaskit/avatar";
import DropdownMenu, {
  DropdownItemGroup,
  DropdownItem,
} from "@atlaskit/dropdown-menu";
import DynamicTable from "@atlaskit/dynamic-table";
import dummyData from "./DummyData.json";

const Wrapper = styled.div`
  min-width: 600px;
  padding: 0px 50px;
`;

const NameWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const AvatarWrapper = styled.div`
  margin-right: 8px;
`;
const createHead = (withWidth) => {
  return {
    cells: [
      {
        key: "name",
        content: "Name",
        isSortable: true,
        width: withWidth ? 25 : undefined,
      },
      {
        key: "party",
        content: "Party",
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 15 : undefined,
      },
      {
        key: "term",
        content: "Term",
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 10 : undefined,
      },
      {
        key: "content",
        content: "Comment",
        shouldTruncate: true,
      },
      {
        key: "more",
        shouldTruncate: true,
      },
    ],
  };
};

const Dashboard = () => {
  const head = createHead(true);

  const createKey = (input) => {
    return input ? input.replace(/^(the|a|an)/, "").replace(/\s/g, "") : input;
  };
  const rows = dummyData.map((president, index) => ({
    key: `row-${index}-${president.nm}`,
    cells: [
      {
        key: createKey(president.nm),
        content: (
          <NameWrapper>
            <AvatarWrapper>
              <Avatar
                name={president.nm}
                size="medium"
                src={`https://api.adorable.io/avatars/24/${encodeURIComponent(
                  president.nm
                )}.png`}
              />
            </AvatarWrapper>
            <a href="https://atlassian.design">{president.nm}</a>
          </NameWrapper>
        ),
      },
      {
        key: createKey(president.pp),
        content: president.pp,
      },
      {
        key: president.id,
        content: president.tm,
      },
      {
        content: `Hello folks! ${president.nm}`,
      },
      {
        content: (
          <DropdownMenu trigger="More" triggerType="button">
            <DropdownItemGroup>
              <DropdownItem>{president.nm}</DropdownItem>
            </DropdownItemGroup>
          </DropdownMenu>
        ),
      },
    ],
  }));

  return (
    <Wrapper>
      <DynamicTable
        caption="Data Table"
        head={head}
        rows={rows}
        rowsPerPage={10}
        defaultPage={1}
        loadingSpinnerSize="large"
        isLoading={false}
        isFixedSize
        defaultSortKey="term"
        defaultSortOrder="ASC"
        // onSort={() => console.log("onSort")}
        // onSetPage={() => console.log("onSetPage")}
      />
    </Wrapper>
  );
};

export default Dashboard;
