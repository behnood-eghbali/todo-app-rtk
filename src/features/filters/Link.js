import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';

const Link = ({ active, children, setVisibilityFilter, filter }) => (
  <Button
    onClick={() => setVisibilityFilter(filter)}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
    variant="contained"
    color="primary"
  >
    {children}
  </Button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
}

export default Link
