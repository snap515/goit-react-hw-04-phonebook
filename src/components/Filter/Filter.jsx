import css from './Filter.module.css'

export const Filter = ({ filterValue, onFilterChange }) => {
  return (
    <div className={css.filterWrapper}>
      <label className={css.filterLabel} htmlFor="filter">Find contacts by name</label>
      <input className={css.filterInput}type="text" id="filter" name="filter" value={filterValue} onChange={onFilterChange} placeholder="John" />
    </div>
  )
}