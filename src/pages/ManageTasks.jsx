import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import TaskForm from '../components/TaskForm';
import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';

const ManageTasks = () => {
  const [status, setStatus] = React.useState({ hideDialog: true });
  function onOverlayClick() {
    setStatus({ hideDialog: false });
  }
  function dialogClose() {
    setStatus({ hideDialog: false });
  }
  function handleClick() {
    setStatus({ hideDialog: true });
  }

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Kanban" />
      <div className="App" id="dialog-target">
        {/* eslint-disable-next-line jsx-a11y/no-redundant-roles,react/button-has-type */}
        <button className="e-control e-btn" id="targetButton1" role="button" onClick={handleClick.bind(this)}>Open</button>
        {/* eslint-disable-next-line react/jsx-no-bind */}
        <DialogComponent width="250px" isModal target="#dialog-target" visible={status.hideDialog} close={dialogClose} overlayClick={onOverlayClick}>
          <div>
            <TaskForm />
          </div>

        </DialogComponent>
      </div>
      <KanbanComponent
        id="kanban"
        keyField="Status"
        dataSource={kanbanData}
        cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default ManageTasks;
