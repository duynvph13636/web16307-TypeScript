import React from "react";
import { Link } from "react-router-dom";
import { CategoryType } from "../../types/category";

type ListCategoryProps = {
  cate: CategoryType[];
  onRemovecate:(id:Number)=>void
};

const ListCategory = (props: ListCategoryProps) => {
  return (
    <div>
      <main>
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-6">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Name
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {props.cate?.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td className="px-6 py-4">
                              <div className="text-sm text-gray-900">
                                {item.name}
                              </div>
                            </td>

                            <td className="px-6 py-4">
                              <span className="px-6 py-4 text-right text-sm font-medium">
                                <button
                                  data-id="${post.id}"
                                  className="btne text-black inline-block py-3 px-5 rounded"
                                >
                                  <Link to={`${item._id}/edit`}>Edit</Link>
                                </button>
                              </span>
                              <span className="px-6 py-4 text-right text-sm font-medium">
                                <button
                                  className="btn bg-red-500 text-white inline-block py-3 px-5 rounded"
                                  onClick={() => {
                                    props.onRemovecate(item._id);
                                  }}
                                >
                                  <a href="">delete</a>
                                </button>
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ListCategory;
