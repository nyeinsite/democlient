import { UserService } from './service.js'

function createTable() {
    document.querySelector('#crud-table') && document.querySelector('#crud-table').remove();
    function removeTags(str) {
        if ((str === null) || (str === ''))
            return false;
        else
            str = str.toString();
        return str.replace(/(<([^>]+)>)/ig, '');
    }
    const table = document.createElement('table'),
        thead = table.createTHead(),
        tbody = table.createTBody(),
        tfoot = table.createTFoot()


    table.setAttribute('id', 'crud-table')
    table.setAttribute('border', 1)
    table.setAttribute('bordercolor', '#e8e8e8')

    const doctor = document.getElementById('doctor');
    const customer = document.getElementById('customer');
    const staff = document.getElementById('staff');
    const owner = document.getElementById('owner');
    const row = thead.insertRow()


    const keys = ['id', 'username', 'password', 'email', 'address', 'phone', 'company', 'useroleid', 'softdelete']
    keys.forEach((key) => {
        const td = document.createElement('td');
        td.appendChild(document.createTextNode(key))
        row.appendChild(td)
    })

    const td = document.createElement('td')
    td.appendChild(document.createTextNode('action'))
    row.appendChild(td)


    doctor.addEventListener("click", () => {

        document.querySelectorAll(".crud-table-row").forEach(el => el.remove())

        const usertype = '1';
        UserService.getUsersByRole(usertype).then((res) => {


            res.data.forEach((obj) => {
                const row = tbody.insertRow()
                row.setAttribute('class', 'crud-table-row')
                row.setAttribute('key', obj['id'])
                for (let key in obj) {
                    const td = document.createElement('td'),
                        input = document.createElement('input')

                    input.setAttribute('class', 'crud-table-input')
                    input.setAttribute('type', 'text')
                    input.setAttribute('name', key)
                    input.setAttribute('value', obj[key])
                    input.setAttribute('readonly', 'true')
                    td.appendChild(input)
                    row.appendChild(td)
                }

                const edit_btn = document.createElement('button'),
                    delete_btn = document.createElement('button'),
                    td = document.createElement('td')

                edit_btn.setAttribute('class', 'action-btn edit')
                edit_btn.innerHTML = '&#x270e;'
                delete_btn.setAttribute('class', 'action-btn delete')
                delete_btn.innerHTML = '&#x2716;'

                edit_btn.onclick = (e) => updateRow(e)
                delete_btn.onclick = (e) => deleteRow(e)

                td.appendChild(edit_btn)
                td.appendChild(delete_btn)
                row.appendChild(td)


            })

        })

    })
    customer.addEventListener("click", () => {
        document.querySelectorAll(".crud-table-row").forEach(el => el.remove())

        const usertype = '2';
        UserService.getUsersByRole(usertype).then((res) => {


            res.data.forEach((obj) => {
                const row = tbody.insertRow()
                row.setAttribute('class', 'crud-table-row')
                row.setAttribute('key', obj['id'])
                for (let key in obj) {
                    const td = document.createElement('td'),
                        input = document.createElement('input')

                    input.setAttribute('class', 'crud-table-input')
                    input.setAttribute('type', 'text')
                    input.setAttribute('name', key)
                    input.setAttribute('value', obj[key])
                    input.setAttribute('readonly', 'true')
                    td.appendChild(input)
                    row.appendChild(td)
                }

                const edit_btn = document.createElement('button'),
                    delete_btn = document.createElement('button'),
                    td = document.createElement('td')

                edit_btn.setAttribute('class', 'action-btn edit')
                edit_btn.innerHTML = '&#x270e;'
                delete_btn.setAttribute('class', 'action-btn delete')
                delete_btn.innerHTML = '&#x2716;'

                edit_btn.onclick = (e) => updateRow(e)
                delete_btn.onclick = (e) => deleteRow(e)

                td.appendChild(edit_btn)
                td.appendChild(delete_btn)
                row.appendChild(td)
            })

        })

    })
    staff.addEventListener("click", () => {
        document.querySelectorAll(".crud-table-row").forEach(el => el.remove())


        const usertype = '3';
        UserService.getUsersByRole(usertype).then((res) => {


            res.data.forEach((obj) => {
                const row = tbody.insertRow()
                row.setAttribute('class', 'crud-table-row')
                row.setAttribute('key', obj['id'])
                for (let key in obj) {
                    const td = document.createElement('td'),
                        input = document.createElement('input')

                    input.setAttribute('class', 'crud-table-input')
                    input.setAttribute('type', 'text')
                    input.setAttribute('name', key)
                    input.setAttribute('value', obj[key])
                    input.setAttribute('readonly', 'true')
                    td.appendChild(input)
                    row.appendChild(td)
                }

                const edit_btn = document.createElement('button'),
                    delete_btn = document.createElement('button'),
                    td = document.createElement('td')

                edit_btn.setAttribute('class', 'action-btn edit')
                edit_btn.innerHTML = '&#x270e;'
                delete_btn.setAttribute('class', 'action-btn delete')
                delete_btn.innerHTML = '&#x2716;'

                edit_btn.onclick = (e) => updateRow(e)
                delete_btn.onclick = (e) => deleteRow(e)

                td.appendChild(edit_btn)
                td.appendChild(delete_btn)
                row.appendChild(td)
            })

        })

    })
    owner.addEventListener("click", () => {
        console.log(document.querySelectorAll('.crud-table-row'))

        document.querySelectorAll(".crud-table-row").forEach(el => el.remove())


        const usertype = '4';
        UserService.getUsersByRole(usertype).then((res) => {


            res.data.forEach((obj) => {
                const row = tbody.insertRow()
                row.setAttribute('class', 'crud-table-row')
                row.setAttribute('key', obj['id'])
                for (let key in obj) {
                    const td = document.createElement('td'),
                        input = document.createElement('input')

                    input.setAttribute('class', 'crud-table-input')
                    input.setAttribute('type', 'text')
                    input.setAttribute('name', key)
                    input.setAttribute('value', obj[key])
                    input.setAttribute('readonly', 'true')
                    td.appendChild(input)
                    row.appendChild(td)
                }

                const edit_btn = document.createElement('button'),
                    delete_btn = document.createElement('button'),
                    td = document.createElement('td')

                edit_btn.setAttribute('class', 'action-btn edit')
                edit_btn.innerHTML = '&#x270e;'
                delete_btn.setAttribute('class', 'action-btn delete')
                delete_btn.innerHTML = '&#x2716;'

                edit_btn.onclick = (e) => updateRow(e)
                delete_btn.onclick = (e) => deleteRow(e)

                td.appendChild(edit_btn)
                td.appendChild(delete_btn)
                row.appendChild(td)
            })

        })

    })


    const row2 = tfoot.insertRow(),
        td2 = document.createElement('td'),
        button = document.createElement('button')

    button.setAttribute('class', 'action-btn add')
    button.innerHTML = '&plus;'
    button.onclick = () => addRow()

    td2.appendChild(button)
    row2.appendChild(td2)
    document.querySelector('#root').appendChild(table)
}

function addRow() {
    document.querySelectorAll('.temp-column') && document.querySelectorAll('.temp-column').forEach((el) => el.remove())

    const row = document.querySelector('tfoot tr'),
        keys = ['username', 'password', 'email', 'address', 'phone', 'company', 'useroleid', 'softdelete'],
        fields = []


    keys.forEach((key) => {
        const td = document.createElement('td'),
            input = document.createElement('input')

        td.setAttribute('class', 'temp-column')

        input.setAttribute('class', 'crud-table-input active')
        input.setAttribute('type', 'text')
        input.setAttribute('name', key)

        fields.push(input)
        td.appendChild(input)
        row.appendChild(td)

    })
    const save_btn = document.createElement('button'),
        td = document.createElement('td')

    td.setAttribute('class', 'temp-column')
    save_btn.setAttribute('class', 'action-btn save')
    save_btn.innerHTML = '&#x2714;'

    save_btn.onclick = () => {
        const [username, password, email, address, phone, company, useroleid, softdelete] = fields

        if (username.value && password.value && email.value && address.value && phone.value && company.value && useroleid.value && softdelete.value) {
            UserService.saveUser({ username: username.value, password: password.value, email: email.value, address: address.value, phone: phone.value, company: company.value, useroleid: useroleid.value, softdelete: softdelete.value })
                .then((res) => {
                    if (res.status === 200) {
                        const tbody = document.querySelector('tbody'),
                            row = tbody.insertRow()
                        const obj = res.data
                        row.setAttribute('class', 'crud-table-row')
                        row.setAttribute('key', obj['id'])

                        for (let key in obj) {
                            const td = document.createElement('td'),
                                input = document.createElement('input')
                            input.setAttribute('class', 'crud-table-input')
                            input.setAttribute('type', 'text')
                            input.setAttribute('name', key)
                            input.setAttribute('value', obj[key])
                            input.setAttribute('readonly', 'true')

                            td.appendChild(input)
                            row.appendChild(td)
                        }
                        const edit_btn = document.createElement('button'),
                            delete_btn = document.createElement("button"),
                            td = document.createElement('td')
                        edit_btn.setAttribute('class', 'action-btn edit')
                        edit_btn.innerHTML = '&#x270e;'
                        delete_btn.setAttribute('class', 'action-btn delete')
                        delete_btn.innerHTML = '&#x2716;'
                        edit_btn.onclick = (e) => updateRow(e)
                        delete_btn.onclick = (e) => deleteRow(e)

                        td.appendChild(edit_btn)
                        td.appendChild(delete_btn)
                        row.appendChild(td)
                        document.querySelectorAll('.temp-column').forEach((el) => el.remove())
                    } else throw 'Failed to save data!'
                })
                .catch((err) => alert(err))
        } else alert('Required all the Fields!')
    }
    td.appendChild(save_btn)
    row.appendChild(td)

}

function updateRow(e) {
    document.querySelector('.action-btn.update') && document.querySelector('.action-btn.update').remove()
    document.querySelectorAll('.action-btn.edit').forEach((el) => el.classList.remove('hide'))

    const rows = Array.from(document.querySelectorAll('.crud-table-row'))
    rows.shift()
    rows.forEach((row) => {
        const columns = Array.from(row.children)

        columns.forEach((column) => {
            column.children[0].setAttribute('readonly', 'true')
            column.children[0].classList.remove('active')
        })
    })
    const target_btn = e.target,
        target_row = target_btn.parentElement.parentElement

    target_btn.classList.add('hide')
    const columns = Array.from(target_row.children)
    columns.pop()
    for (let i = 1; i < columns.length; i++) {
        columns[i].children[0].removeAttribute('readonly')
        columns[i].children[0].classList.add('active')

    }
    const update_btn = document.createElement('button')
    update_btn.setAttribute('class', 'action-btn update active')
    update_btn.innerHTML = '&#x2714;'

    update_btn.onclick = () => {

        const fields = []
        columns.forEach((column) => {
            column.children[0].setAttribute('readonly', 'true')
            column.children[0].classList.remove('active')
            target_btn.classList.remove('hide')
            fields.push(column.children[0])
            update_btn.remove()
        })
        const [id, username, password, email, address, phone, company, useroleid, softdelete] = fields

        UserService.updateUser(id.value, { id: id.value, username: username.value, password: password.value, email: email.value, address: address.value, phone: phone.value, company: company.value, useroleid: useroleid.value, softdelete: softdelete.value }).catch((err) => {
            window.location.reload()
            alert(err)
        })
    }
    e.target.parentElement.prepend(update_btn)
}

function deleteRow(e) {
    const target_row = e.target.parentElement.parentElement,
        key = target_row.getAttribute('key')

    if (window.confirm('Are you sure you want to delete?')) {
        UserService.deleteUser(key)
            .then((res) => {
                res.status === 200 && target_row.remove()
            })
            .catch((err) => console.log(err))
    }

}

function __init__() {
    createTable()
}

document.onreadystatechange = () => {
    document.readyState === 'complete' && __init__()
}