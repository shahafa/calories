import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'material-ui/Card';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const styles = {
  root: {
    margin: '30px auto 0 auto',
    maxWidth: '640px',
  },

  roleSelectField: {
    underlineStyle: { borderColor: '#FFFFFF' },
    labelStyle: {
      fontSize: '13px',
      height: '32px',
    },
    menuItemStyle: { fontSize: '13px' },
  },

  updateButton: {
    display: 'flex',
    flexDirection: 'row-reverse',
    padding: '0 25px 10px 0',
  },
};

class UsersForm extends Component {
  static propTypes = {
    userId: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired,
    onUpdateButtonClick: PropTypes.func.isRequired,
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
                <TableHeaderColumn>Email Address</TableHeaderColumn>
                <TableHeaderColumn>Role</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {users.sort().map(user => (
                <TableRow key={user.id}>
                  <TableRowColumn>{user.email}</TableRowColumn>
                  <TableRowColumn>
                    <SelectField
                      value={user.role}
                      onChange={(event, key, value) => this.handleRoleChange(user.id, value)}
                      underlineFocusStyle={styles.roleSelectField.underlineStyle}
                      underlineStyle={styles.roleSelectField.underlineStyle}
                      underlineDisabledStyle={styles.roleSelectField.underlineStyle}
                      labelStyle={styles.roleSelectField.labelStyle}
                      menuItemStyle={styles.roleSelectField.menuItemStyle}
                      disabled={user.id === userId}
                      fullWidth
                    >
                      <MenuItem value={'admin'} primaryText="Admin" />
                      <MenuItem value={'user'} primaryText="User" />
                      <MenuItem value={'userManager'} primaryText="User Manager" />
                    </SelectField>
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
