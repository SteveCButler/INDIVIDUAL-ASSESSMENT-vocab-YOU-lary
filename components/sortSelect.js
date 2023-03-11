import renderToDom from '../utils/renderToDom';

const sortSelect = () => {
  const domString = `<select id="sortDropdown" class="form-select" aria-label="Sort select">
  <option selected>Sort</option>
  <option value="1">Alphabetically</option>
  <option value="2">Newest</option>
  <option value="3">Oldest</option>
</select>
`;

  renderToDom('#sortSelect', domString);
};

export default sortSelect;
