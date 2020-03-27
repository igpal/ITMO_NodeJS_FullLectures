//let arrForDestroy = new Set();
let globalX = 8,
    globalY = 8;

function getTdBYCoordinats(X, Y) {
    //let val = `${X}` - `${Y}`;
    let val = X + "-" + Y;
    let td = $("[data-xy='" + val + "']");
    if (td.length === 0) {
        return false;
    } else {
        return td[0];
    }



}

function check() {
    console.log('Start');
    for (let i = 1; i <= globalX; i++) {
        for (let j = 1; j <= globalY; j++) {
            let i1 = i - 1;
            let i2 = i + 1;
            let j1 = j - 1;
            let j2 = j + 1;
            let td = getTdBYCoordinats(i, j);
            let td_left = getTdBYCoordinats(i1, j);
            let td_right = getTdBYCoordinats(i2, j);
            let td_top = getTdBYCoordinats(i, j1);
            let td_bottoom = getTdBYCoordinats(i, j2);
            let killX = false;
            let killY = false;
            if (td_left) {
                if (td_right) {
                    if (td_left.dataset.type === td_right.dataset.type) {
                        if (td_left.dataset.type === td.dataset.type) {
                            killY = true;
                        }
                    }
                }
            }

            if (td_top) {
                if (td_bottoom) {
                    if (td_top.dataset.type === td_bottoom.dataset.type) {
                        if (td_top.dataset.type === td.dataset.type) {
                            killX = true;
                        }
                    }
                }
            }

            if (killX) {

                let j_prom = j - 1;
                while (j_prom > 0) {
                    let tdUp = getTdBYCoordinats(j_prom, i1);
                    let tdDn = getTdBYCoordinats(j, i1);
                    if (tdUp) {
                        let t_prom = tdUp.dataset.type;
                        let className = 'class' + t_prom;
                        tdDn.className = className;
                    }
                    j_prom--;
                }

                j_prom = j - 1;
                while (j_prom > 0) {
                    let tdUp = getTdBYCoordinats(j_prom, i);
                    let tdDn = getTdBYCoordinats(j, i);
                    if (tdUp) {
                        let t_prom = tdUp.dataset.type;
                        let className = 'class' + t_prom;
                        tdDn.className = className;
                    }
                    j_prom--;
                }

                j_prom = j - 1;
                while (j_prom > 0) {
                    let tdUp = getTdBYCoordinats(j_prom, i1);
                    let tdDn = getTdBYCoordinats(j, i1);
                    if (tdUp) {
                        let t_prom = tdUp.dataset.type;
                        let className = 'class' + t_prom;
                        tdDn.className = className;
                    }
                    j_prom--;
                }

                // генерируем три рандомных элемента
                let td1_new = getTdBYCoordinats(i1, 1);
                let td2_new = getTdBYCoordinats(i, 1);
                let td3_new = getTdBYCoordinats(i2, 1);
                td1_new.dataset.type = get_random_type2();
                td2_new.dataset.type = get_random_type2();
                td3_new.dataset.type = get_random_type2();
                td1_new.className = 'class' + td1_new.dataset.type;
                td2_new.className = 'class' + td2_new.dataset.type;
                td3_new.className = 'class' + td3_new.dataset.type;
            }

        }
    }

    function get_random_type2() {
        return Math.floor(Math.random() * (5 - 1)) + 1;
    }
}