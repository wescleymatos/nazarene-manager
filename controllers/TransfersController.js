const MemberRepository = require('../src/Membership/Repositories/MemberRepository');
const TransferEnum = require('../src/Membership/Enums/TransferEnum');
const KindEnum = require('../src/Membership/Enums/KindEnum');
const StatusEnum = require('../src/Membership/Enums/StatusEnum');
const LeaveChurchEnum = require('../src/Membership/Enums/LeaveChurchEnum');
const convertDate = require('../src/Shared/Utils/ConvertDate');

const controller = (repository, kindTransfer, kindEnum, leaveChurchEnum, statusEnum, convertDate) => {

  const index = (req, res) => {
    res.locals.dispatch = 'Transfers#Index';
    const { to, memberId, churchId } = req.query;

    res.render('church/transfers/index', { memberId, churchId, to });
  };

  const create = async (req, res) => {
    try {
      const { to, memberId } = req.body;
      let transfer = {memberId, kind: kindEnum.Saida};
      let member = {id: memberId, status: statusEnum.Arquivado};

      if (to === kindTransfer.OutraDenominacao) {
        transfer = { ...transfer, status: leaveChurchEnum.OutraDenominacao };
      } else {
        transfer = { ...transfer, status: leaveChurchEnum.IgrejaNazareno };
      }

      await repository.transfer(member, transfer);

      res.send({error: false, msg: 'Transferencia realizada com sucesso.'});
    } catch(err) {
      res.status(400).send({error: true, msg: 'Não foi possível transferir o membro.'});
    }
  };

  return {
    index,
    create
  };
};

module.exports = controller(MemberRepository, TransferEnum, KindEnum, LeaveChurchEnum, StatusEnum, convertDate);
