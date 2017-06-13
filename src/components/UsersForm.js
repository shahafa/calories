import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'material-ui/Card';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { grey500 } from 'material-ui/styles/colors';

const styles = {
  root: {
    margin: '30px auto 0 auto',
    maxWidth: '640px',
  },

  roleSelectField: {
    underlineStyle: { borderColor: '#FFFFFF' },
    labelStyle: {
      fontSize: '13px',
      height: '36px',
    },
    menuItemStyle: { fontSize: '13px' },
  },

  deleteButton: {
    cursor: 'pointer',
    height: '18px',
    width: '18px',
  },

  updateButton: {
    display: 'flex',
    flexDirection: 'row-reverse',
    padding: '0 10px 10px 0',
  },
};

class UsersForm extends Component {
  static propTypes = {
    userId: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired,
    onDeleteUserClick: PropTypes.func.isRequired,
    onUpdateButtonClick: PropTypes.func.isRequired,
  }

  static roleToString = (role) => {
    if (role === 'admin') {
      return 'Admin';
    } else if (role === 'userManager') {
      return 'User Manager';
    }
    return 'User';
  }

  constructor(props) {
    super(props);
    this.state = {
      users: props.users,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { users } = nextProps;
    this.setState({ users });
  }

  handleRoleChange(userId, value) {
    const { users } = this.state;
    this.setState({
      users: users.map(user => (user.id === userId ? { ...user, role: value } : user)),
    });
  }

  render() {
    const { users } = this.state;
    const {
      userId,
      onDeleteUserClick,
      onUpdateButtonClick,
    } = this.props;

    return (
      <div style={styles.root}>
        <Card style={styles.card}>
          <Table selectable={false}>
            <TableHeader
              adjustForCheckbox={false}
              displaySelectAll={false}
            >
              <TableRow>
                <TableHeaderColumn>User</TableHeaderColumn>
                <TableHeaderColumn>Role</TableHeaderColumn>
                <TableHeaderColumn style={{ width: '18px' }} />
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {users.sort().map(user => (
                <TableRow key={user.id}>
                  <TableRowColumn>{user.email}</TableRowColumn>
                  {user.id === userId ?
                    <TableRowColumn style={{ color: grey500, fontWeight: '300' }}>
                      {UsersForm.roleToString(user.role)}
                    </TableRowColumn>
                  :
                    <TableRowColumn>
                      <SelectField
                        value={user.role}
                        onChange={(event, key, value) => this.handleRoleChange(user.id, value)}
                        underlineFocusStyle={styles.roleSelectField.underlineStyle}
                        underlineStyle={styles.roleSelectField.underlineStyle}
                        underlineDisabledStyle={styles.roleSelectField.underlineStyle}
                        labelStyle={styles.roleSelectField.labelStyle}
                        menuItemStyle={styles.roleSelectField.menuItemStyle}
                        fullWidth
                      >
                        <MenuItem value={'admin'} primaryText="Admin" />
                        <MenuItem value={'user'} primaryText="User" />
                        <MenuItem value={'userManager'} primaryText="User Manager" />
                      </SelectField>
                    </TableRowColumn>
                  }
                  <TableRowColumn style={{ width: '18px' }}>
                    {user.id !== userId &&
                      <DeleteIcon
                        color="#9E9E9E"
                        style={styles.deleteButton}
                        onClick={() => onDeleteUserClick(user)}
                      />
                    }
                  </TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div style={styles.updateButton}>
            <FlatButton
              label="Update"
              primary
              onTouchTap={() => onUpdateButtonClick(users)}
            />
          </div>
        </Card>
      </div>
    );
  }
}

export default UsersForm;
