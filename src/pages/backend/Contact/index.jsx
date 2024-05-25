import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import database from "../../../database.json";

const Contact = () => {
    const contacts = database.Contacts;
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong>Quan li danh muc</strong>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/" className="btn btn-sm btn danger">
              {"Thùng rác"}
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-3">Thiet ke form them</div>
          <div className="col-md-9">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Hình ảnh</th>
                  <th>Tên danh mục</th>
                  <th>slug</th>
                  <th>chức năng</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                {contacts &&
                  contacts.length > 0 &&
                  contacts.map((contact) => {
                    return (
                      <tr key={contact.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img src={contact.image} alt={contact.image} />
                        </td>
                        <td>{contact.name}</td>
                        <td>{contact.slug}</td>
                        <td>
                          <Link
                            className="btn btn-sm btn-info me-1"
                            to={"/admin/contact/edit/" + contact.id}
                          >
                            <FaTrash />
                          </Link>
                        </td>
                        <td>{contact.id}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Contact;