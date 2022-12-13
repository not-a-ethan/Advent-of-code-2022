function checkBags(inputString, part) {
  const diffrentBags = inputString.split("\n")
  if (part == 1) {
    const diffrentBags = inputString.split("\n")
    let inBoth = []

    for (let i = 0; i < diffrentBags.length; i++) {
      const bagLength = diffrentBags[i].length
      const theTwoBags = [diffrentBags[i].substring(0, (bagLength / 2)), diffrentBags[i].substring((bagLength / 2))]

      for (let g = 0; g < theTwoBags[0].length; g++) {
        const arrayLength = inBoth.length
        for (let a = 0; a < theTwoBags[1].length; a++) {
          if (theTwoBags[0][g] === theTwoBags[1][a]) {
            inBoth.push(theTwoBags[1][a])
            break
          }
        }
        if (arrayLength !== inBoth.length) {
          break
        }
      }
    }
    console.log(priority(inBoth))
    return priority(inBoth)
  } else if (part == 2) {
    let inBoth = []
    for (let i = 0; i < diffrentBags.length; i += 3) {
      for (let g = 0; g < diffrentBags[i].length; g++) {
        const arrayLength = inBoth.length
        for (let a = 0; a < diffrentBags[i + 1].length; a++) {
          if (diffrentBags[0][g] === diffrentBags[1][a]) {
            inBoth.push(diffrentBags[i + 1][a])
            break
          }
        }
        if (arrayLength !== inBoth.length) {
          break
        }
      }
    }
    for (let i = 0; i < diffrentBags.length; i += 3) {
      for (let g = 0; g < diffrentBags[i].length; g++) {
        const arrayLength = inBoth.length
        if (i % 3 == 0) {
          for (let a = 0; a < diffrentBags[i + 2].length; a++) {
            if (diffrentBags[i][g] === diffrentBags[i + 2][a]) {
              inBoth.push(diffrentBags[i + 2][a])
              //console.log(priority(inBoth))

              break
            }
          }
        }
        if (arrayLength !== inBoth.length) {
          break
        }
      }
    }

    console.log(priority(inBoth))
    return priority(inBoth)
  }
}

function priority(inputArray) {
  let priorityNum = 0

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] == "a") {
      priorityNum += 1
    } else if (inputArray[i] == "b") {
      priorityNum += 2
    } else if (inputArray[i] == "c") {
      priorityNum += 3
    } else if (inputArray[i] == "d") {
      priorityNum += 4
    } else if (inputArray[i] == "e") {
      priorityNum += 5
    } else if (inputArray[i] == "f") {
      priorityNum += 6
    } else if (inputArray[i] == "g") {
      priorityNum += 7
    } else if (inputArray[i] == "h") {
      priorityNum += 8
    } else if (inputArray[i] == "i") {
      priorityNum += 9
    } else if (inputArray[i] == "j") {
      priorityNum += 10
    } else if (inputArray[i] == "k") {
      priorityNum += 11
    } else if (inputArray[i] == "l") {
      priorityNum += 12
    } else if (inputArray[i] == "m") {
      priorityNum += 13
    } else if (inputArray[i] == "n") {
      priorityNum += 14
    } else if (inputArray[i] == "o") {
      priorityNum += 15
    } else if (inputArray[i] == "p") {
      priorityNum += 16
    } else if (inputArray[i] == "q") {
      priorityNum += 17
    } else if (inputArray[i] == "r") {
      priorityNum += 18
    } else if (inputArray[i] == "s") {
      priorityNum += 19
    } else if (inputArray[i] == "t") {
      priorityNum += 20
    } else if (inputArray[i] == "u") {
      priorityNum += 21
    } else if (inputArray[i] == "v") {
      priorityNum += 22
    } else if (inputArray[i] == "w") {
      priorityNum += 23
    } else if (inputArray[i] == "x") {
      priorityNum += 24
    } else if (inputArray[i] == "y") {
      priorityNum += 25
    } else if (inputArray[i] == "z") {
      priorityNum += 26
    } else if (inputArray[i] == "A") {
      priorityNum += 27
    } else if (inputArray[i] == "B") {
      priorityNum += 28
    } else if (inputArray[i] == "C") {
      priorityNum += 29
    } else if (inputArray[i] == "D") {
      priorityNum += 30
    } else if (inputArray[i] == "E") {
      priorityNum += 31
    } else if (inputArray[i] == "F") {
      priorityNum += 32
    } else if (inputArray[i] == "G") {
      priorityNum += 33
    } else if (inputArray[i] == "H") {
      priorityNum += 34
    } else if (inputArray[i] == "I") {
      priorityNum += 35
    } else if (inputArray[i] == "J") {
      priorityNum += 36
    } else if (inputArray[i] == "K") {
      priorityNum += 37
    } else if (inputArray[i] == "L") {
      priorityNum += 38
    } else if (inputArray[i] == "M") {
      priorityNum += 39
    } else if (inputArray[i] == "N") {
      priorityNum += 40
    } else if (inputArray[i] == "O") {
      priorityNum += 41
    } else if (inputArray[i] == "P") {
      priorityNum += 42
    } else if (inputArray[i] == "Q") {
      priorityNum += 43
    } else if (inputArray[i] == "R") {
      priorityNum += 44
    } else if (inputArray[i] == "S") {
      priorityNum += 45
    } else if (inputArray[i] == "T") {
      priorityNum += 46
    } else if (inputArray[i] == "U") {
      priorityNum += 47
    } else if (inputArray[i] == "V") {
      priorityNum += 48
    } else if (inputArray[i] == "W") {
      priorityNum += 49
    } else if (inputArray[i] == "X") {
      priorityNum += 50
    } else if (inputArray[i] == "Y") {
      priorityNum += 51
    } else if (inputArray[i] == "Z") {
      priorityNum += 52
    }
  }

  return priorityNum
}

const input = `
sfDRhjhHsHhgWPJvPmmQnmPqnW
pTddGVwcpMTTCdnQJqqQqqqVtVms
MdZCZGdcrCNRFZRhFssL
CttWnSnNfSnCHsWrTlTPPpPCTRrLpl
DgqqghjqJBVgDMTPGVlRGwbfLLGP
cgqBBhjqcBdMcWQcQNnNzsfv
lnDWMgTLlTFlHHgDDgngWFnlBWNcBQrdjcrrdQrPBrdjhWhj
JqSVRRVmmRqJJbZGGJqJvbmBNcjPNQNssQPhSSdwPwwwQr
bCRJqGJJmzmJZRCmFNTLTttTzfFfLglf
SPWvWMvCSPcjzjDbcwfjTl
lLNRNLqhhQVQJlRjrjrDwTzzqzzfrb
GRnRVhRJLFnnhtJQNVdLdLgWCmmZlMlgSCSWSgpZtPBM
pTGFrLFTFWFprLDBmLbSbtmBDb
MqjwqJwZlqJjHlqjHHPmSbsffDmsStDnHnQmsm
ZPJjVPZbVMRRPZwMJZVMNJMcGWpWFcWFFNFGrWTzWzFrzG
MffZZtMTnTtSZLdfgSMtCHSbmWsGwbHGSqvmCqWb
lzpQhrhphhlzDDhRPmBvqHGRbBbwbbssCB
JJljpvhFrrjhptnddMJfdtgnMT
drCtpNLCLpTpJSdswQhvDbHZHDLDHQ
WmWgBWRcRzVVWVBgBBnnlfgWHjmvjQhwbbbshQvZDQQjsHZC
fqBzggWPPzBWBzffcfnMJdtFtrpqrGMpdCCTdM
JwJWqNBNNdzzBSzGsqbdNJbVMpptPmZMrVZrrZMtPmPwDp
THgfgffffHRhQRLVMGVQmGtLDGmM
TjGchhlHhGfhRHgRgWJSqzJWWlqNSzsWSJ
dNmPlzdvdspsFWwQmG
bhZSbVJBJnLNTnwWVHMGwQsGMFFw
RnnbbTnSnSSTTnLfRCCPqDPDNDlfCfDDcr
lhhTcnPchPPHCCStwWTHbS
GDRFNqlQJsGJqGJDqVNsqssDQBSZWHQBCZHHwbZbtHtwCbZW
RNJrFJFJDrmqsVjNmDvrvfzfffcvdpMrvlfh
DtLdNGHNfwBJQwgCrncgpSpcnlfC
sGqWPMPTvPPhTjjsqRqPvSlzFFpjnnSrjczprgllFF
vVPGPGMbPGqTRWsMqZhqvbZNLLmLQddQdmBtBwBNBwNB
ChVzhwpdpqHhtNmHHNHt
QsjGTQcTWQjfjbssQDPmHgfrrVrPZnntZD
jTGJSGvWJwqlvlCBqV
pRVcSRffTPfBWfNVfWBWdJdwhvvwGjjFmGvhLTdh
qsrHqtbDZqsnsZqCQDtHnQQLwFvJFhGJwddvwLcCwJJJdv
sgcqHnzqqzgnHnqrstZzqsnSPllRlVVSNpWVNVRgMBlVPW
WRQTtHrTrrDRvQDHrbtJlpdhLdGsDllfspLpphhs
GzCSqCSmSmVSpsljphlpsL
gVwCVGzmNmCNRQTvJQJHnvwQ
psBDsswNjBcqtHtsTHsqtM
vQrPqZPmvgQZrfgmPrfJQlLvnLzVHLnSnnTLTnnHMt
PRCJRPgmqrmZmmqQQDDRwwNwjwDwpFjDDW
VtBgCqbVjPbSbHtPRdrssZMFZlrRsBRw
LzWmhcDqTDvnDWTFMrwRvwFrGZdGlZ
zJLczJDnWDpDNzmDczWLzWzWNCbbttHPCHbSVbqgHSCjffQf
TjTfvJjjvcjTQcDzMDfQTLLbLgVVVhMrWWblghbbLN
dZHFSpqpqpbWrhhlWh
dFwPBHqFSqwZSmZmSlqZjTvvJTmzcJsTTTjfvsfQ
qqqNTlfjzbMGJlHMSZtZzZgRZDgZDzdS
nLCCVVcmgCdZdSlg
cmQscBVpFsppsVlffQGJHjlWHJGq
whwVGGZhVLwhsFFDCTrDccCctrcctL
CzSSvPSzTBStSWND
HllCHvHJPPqjCPvbfdvvbsmhdRRRsmZhsRdMFQMRFQ
gFCfCVfCsLCftsBsDbSHrbJRJJtrmrddrd
hqQpqWhlNlpMlppfdTRhmbmTdbdHJH
NGvvjvpvpfGgGGDCZZBg
rmBtgdddtqmmrqBGbLGJlmctWWvbNzvfpsVVfzzSVSTsWNpz
RPDRjMhDFljvsvzlSs
wDChhnCQwDwmgJclqrgm
WHrrDbWHQPzNrrRVMQJMQGvvsvvjnDLvfsjsvwfGws
dhdhZhcphZZZmtFFTcZSmcZsnfqjLRnngnpwnGfqfvvnRs
FZcZhtmhFCttldFlSSmlSthQJzNVMbRPWWPJzrbbJCNMPH
wMFBpvTppLpwfNfjggmNmGTj
ddSDDbGHnRDQDZRHSZSdRZDQzjjrzNNNfnmNrllhgglhfgWg
bCQqsJqGDZCHbppwvtVMMvJcLL
pSpSVdLDFCvDDvCFvJgwjsJbNtmtJgSjmj
ZcWNNBQfwjsttsbc
WNQMBflQQNGQrFpFVVRDHpCMDR
PfPvqLphWpWLtZSWpWLPjwJbmDwJbbDbmJVjPQ
lQQnRGMllMjswrmwJM
ggRGFFGGdlGGzFFzzFFcNBvSfLQZShZTtdLWWZWSWZSp
lCfgHsVHJDdswNRmsMRQ
vccvvFVrPcvQNRdnmqdR
rctPBrPBTTpPFBLZZcCCgVHJHVjjbLHfCjfS
dfGdsGGrlFFlbWjfgblhJhLDLDDMLNvJNLLBnmLB
tSppwQQHSSVtwStSpZZVqRJmBDzLvwPmzJznBDDmLBBJ
cHvtpRSvptCRbbjrrcfjrWjf
BBdHdjgQdjMMsHJscFnrzLpLgznLFzcF
wvllmNmVvZfvmZWqcPptPztFSWLFGrrFnt
ZbCvqqmNvflfVTbZfNllsjHdjdhhHDTHRBJjjMsc
FNCPtPtgLFJwPwflFwSrLFcMczQZTbMVmzzVZMcNVVVb
DhRDdhpWQDZmzVSQ
vnhBSHppjRBHqpWvrPFtJLJlLvfLPF
nmcSnnWjmfCTcHPHJCvh
zdDdlrrzGFFLPtPhBBhH
NGNGrzrRrzphwwwMmqqfnsfZZNbSjQSN
lgznQGWQLQWlnSzHSQlwnlDhCbZhZhZChPChwDcDphcb
jTRvVVrMvmLCPNcNZhRNcD
jfftvsrVJLsVvJqsmfqjfjlQgzlQWFzHFGGBQgtFgnnH
sllpwssrsCwrTRgCHGCTcnZD
jjzJtSdhdzbJWhdQqLdzqSHmDZBGZmmcGGgBGTDRBQTD
SVjgVhgtbVzJPfFpvvNrNswV
StzdmmnnjSRRdhPPdZZd
VbTbCqFFMbZTFcNQLgRgQbvvRh
pGsqGGGfHGfZVffzwtrHnmJHllznrS
NLWJvtLjtLzBjNSvSMDCHfwHSlDMlSSHfZ
RTPTVmhpnprfcfgZwgRD
PnPGFhGsTphsFpdPnpVdmhwFvBJzbdWNtJJjtNJNjbvJtttN
RvmgjDqqjqRgZRMRDpQjQhWsbPLPFnPFFbVVLbdSbnPSvP
NwczHBrJTzcBJHrfWJBCJcrCdnPPPNSlLnsnbFnnLlbSFddS
rGJwCCCJHwBGGctGDtphQQMppQWZmRpD
RPhhSMqRccBDZPPPRhPcNZSzzTLJrWZLmVVQLWZdTQQJWL
nwggfwCvbjwvbwpzWLpWVLdrrrQVTm
vgnGGCsCtntbFsgqlRVMSqNVBDtPSc
mtstjJmvTNBcjRRCHCfH
gLpglwwlgHbZbgpgFrdBBBfdfSPBLSSrcS
GQGglGWWgMglQFHgbmTmNtDqnDDVJMDMNJ
ZMbBZfvVfFfBbMvfMhgbfDsrSTTszcldmTTPmcPFDz
QqQQnwrqWQpwRWWpWwJRwNzTTSPpzPPdTPpSPmdSscmS
GjjtJRWtwGQjRZVChZMjVCrMMf
fJNPTvDPTpHHTPwvjNNHDfTWthhgQQGdBddtlvMsMQMvQh
rFbZVZrLmLdGrrhMBQWg
FmnzVRFLqVqqVLVRRFZSFmTwfHHjHCNCCDGwjnCDDfNH
gQHHQJgCnNJnQFQPRbDQzLRR
mwrdpctWtrMvvrrWwGMmGWWPLzFFLSbLnDFsLPdDFbZRLz
vGcmGwBBMGtmmrvlMrGlqNghlVjCCnTHHCHgCCjh
LmLvVjVjsrmrtmmr
tfcnbScRnlMZtHQPCgSQssPdHC
RGGGGnRfcwnGbbJRBRcwJfnGtBDhhVptNhDvLLhVvvjBWNvT
dZWNQZgQbbNvdWGgZvbTfLrjtrPlGJfrLqLJlj
TMmDpwzmVMHpBLfrcccMfqLjct
SwnSBTDDTwwzwnnsFSZdRNbQZWRvgSCvbQ
WPgZgQLLbMgdBrdnGqqfdhVVvR
HzssNTzwlwHHcczwFjMFHjVGrqRqnVThVqrGrGTRqvrf
zFzcHFNlzJBLgMQLJCZL
nPLNcWtNtlLMccLlWdTjzzbBfBQSzqzBqPqS
RbbDZZrGRJhJjgJQSjCfqQCC
rrmRbDDwvZDpprbGrbDvtctlVVVHvdtlcMtWHMHV
DWrZJrQjWwFcrhzVzbpmpcVqhb
MFnFHMNSqbMpMMmG
FNngNRBRCgnHCCHRPvLNdgJWwJDlJJDssZDLWWlWQlsl
BQqNsGrbBCNbNCrMpGpbHhthRCDRDRJCmDVRhRJP
nfvWvcnSWncSTdzzFLJtRmhHmPPVPVTwwHHtTh
WfLfnfSJZJvdLFZWngfBMGMppGMrNBbGMpZjrj
rccMjBMVJcjjjNNqmmCf
LLspTTGsTGntsntTFwnNNfFqQmmNgNqfNQmZvQ
tpDTwlGDTGPPsbtsLsnnqGTJzJrJBzHzMVrMRzBMlShVBR
PsrNPRjjPbjzjLRWLbjmvtCnMntnpfmtNZNCNv
dDlfwwJllhJTcllScSCQvmtCnmtCmQmQmG
TTFcdhJwhBFfwJJHhdchVclrsbWsbzqLgbzrrjgVRgsqgW
vvcvvDJFcDZPTzwfcwSLczzScz
VNnnVVsqGNntsqtBRblqBndSfzCCRzwRfCHSjdfSjzSH
pppsMVlGGhhrZwMMDP
LltNHMZNHMfNnfgtLHWWbhWjcblSbVbcTWVP
vFmCZsqRRBqrVPWsWTWPWb
mQBqJRdqQBqQzzRQztgLgntGZttddLMggw
ZTCCrCWfGLGBWSwHvHHmHvmTTH
bllhnsbjDlqFfqjhnFRppwmvJppmpRRwMNSmmw
FlnFDjdtqhDdfZZBrtBrrPLt
CRCTHHJcCmJgTSTRcSMcRMVstssSrtprppVFtdrdspNb
jjllnvgBLqdsGprtqtFG
vQjzWnWZWjBLhjgwcccRJgZPCmJm
VRNmBBRNRFcCRcFVRSVSqZLLvvlLqvLfzfMhjJLC
TdHsHbDsbHMJLqlLzl
bgQGsgWWGGgbDgwGzBNSFrFtVSmwRRNFtn
pCCggQPPzWnvlDcWVHGJcNBl
LhsLMrwwGlnMBlNG
mmhwZmqSLwjLttnFbvgFTpPtPtgFCz
TtZSJzFZhZzTFcgFFcmRRmJJQllCHvPshVQsCrshsCssHVHW
GjGGDGqdGfbpDBjMdjpBjBNbVHtsWWPHlMlrrrrWWlVlVsCs
dBdDdfqLdBjjFRFScRStmLnL
GtVppGGPbVgTVFQrZzfrJfJJtMJr
DslmNmLsnmNHNNnnqQRZSJSQfqrJzSJn
BNljDHsHlvhmBshDljWsDWlHdgvpVTFggVgGcTTpvFPTzGCV
GRcnTRtcQTcBTsNtpvhFCmmFhZvFPC
bBJMgqWfdwBJfMPPPmvPqhmjvvPC
SMJMdJbdfwJgVglMWWVdcQnBzSQDzGGQzRQDTQSB
mvjVzLgTzVzvVjJrJgrlMhZRFTtRlRhMRRRtFZ
HGqnNNqfnHNGGfCHndBqnqfFlcppsJMZplMFpMtlscRlpC
qSnPGqqbnSdVrvQrrSJjSV
lWFSWZZvVqnqfnSrJzMcPDjJBJcBMPFJ
NGppNgHdHbRsHPbsgGspTwHTMcmMDdJMMmzBDcMBMDQmjMBd
TGGLRGwHsGtpHgHpNbpttwrvCnvCrqSSLvWqPqSSnWvn
jwcqBNNdZLjSfvPdddRlfb
CDVmsgMHCnnDnhVghmDnDCzRRrSrbrlTbsSTlzzlvzPb
gCCFmCWDnChGCFHnGCLBcwwjvZQZNtGqqNZc
LBDcNstdNJscccVDhLHNDHVtFvdldlFvCSnSvjSSbblgvZjF
rWznQqGMMrmmRZbbwvSFgjwbwm
RQnTQfWqqTzTLJJLVtBTsc
SvwCTHqCqqqHtwtnnHHDtWgrBQLzzVLLzSQVFhbrSFLL
cZmPNmPJdmPjPdcclRPPdhBCFVVVrQzQCCLbcgVbBV
fNlmfZfpfWMCtGGpnM
bSNssNssbPHVccPhclPGpP
ffQfZdZZBDDZgLvhmhzVmVppmlpGgh
jdQQQJRljSFFTWCT
lvlLtvnhnfvMgtrvWjmTmPPzjHcrmdcjdd
qCbssCJbppQZQbRJDQSZCJRpzhmcQjdcTBmmGzmdcmjGmdmT
SqwSbJZSpwwFJFDDbqtNVMwVMMlVNgNVlLhV
DqGFQGNMGMQwCcgtCJcr
sVfjWlzzVsmzVZsdVlHrhjppcgpjrhpphcSJ
LRdLsZBWWmlZldZRmzPDvDTTDMGTPFPvBTTc
jzzzpjgBzTDQQHPH
gLLtZVdCdsLfnbZCbdZtHDfHTJJPPmJJfmHQDJqD
bVtWndLtcZgnhsvMSBrMFrvBWNrB
sfqhLDcqfqRRqQhQRqMcvlJpJwFgzwpjplwbgpwzLz
CrGttnhTWtmSnGrtTtSCZGFzbgHHFFFjljHjZHHFwgwl
mBnrrTmWWCGStVCmMcDPcPBqcsRhcvPR
GLZLBNrGZdGGVgMVJVhnvn
dmWlcqcQMWCJVhMn
cdpPqtQbcHlmQjmZswFfTRFpBTfwwT
ZhtZpvbnbpPbtLHLvdsNdcRLNd
jDDjlCflGwsHfdrfTLrrdN
MzmljBMBWPtsbtSQtW
GHrzPSrNLFnMtSBZjZBB
WWbfDmVmwmmlbVDldWslNnBMJJNZZJCtJJJn
vwDfffVvmDwdTvDRQvpLNpLpcRFpphhHLPHg
scsTslgcnCTCScSTcqLLWlFWLLqbGvRbpL
NZMBdBPtNbbrLGqqqGvqZF
NttdbhMPfjQfNtbMbMmNjhNcCzczSSCSJTSzTCScnfnzwC
pjdjCGGGWPCMSDfS
JhFMFcrgBHPnSnWFWDDn
HVBBJctBccghsJhgrbwLGTTdtjLdbmTMMb
DtGHgDPfGfPhfLwNWSSJQcpHcr
dvlMCzdnMRFCCTjnZNpNQJcSbrWzrpSQWS
TVvFJJMjJdlMvRvMClllZZgPtPGsftfDqtGfVGsGtqqq
jSmmcjmJqcBgwmWMCLLzCsMz
TnTQVDGQTpZGNQHDZDHHQDwsCCdLrflsrCVzVrwWzwrr
zDFpppnNQtnTQQvZZZNvnhqqjtRccRbgqqbSSSjPRg
FwClNSwCFstWZLDLvhvjvtjhhD
TmsHmsmrggzmqnnGGvPGjTbbRGBhbB
cHVqgcrVzrQqzHmMcrMnczzcWFVCCFNJZWJZswwFCZWwffwS
mzbsmbmLRCZTRbSJFvPLPJPJpJffcP
QqWqNVNNNllnnWTglqTVlGNPJDvwcJpwfwccPgccPJDfJF
HMGnNMltqGMjHGqMzmTSmzTsRSszSm
qlGDfljllCTgqCTvCDfBHHQsbrSZZHSHWtvWZB
NzpnNpRnLLwRpdwpVhtqQbSbsWQWbSWnrrnH
cFqwFNpLdVcDJlDgccTD
BRqjnSBNBpRHHpjpBSnHnRBQfQzzCvzWrsWCTvfsvCsCCsfC
ZMVbhqbMdlbLTdsWvfPdPC
hlZVDMZcwJNSgjJgJFnq
CZwZssQQZrmsCmNNDpDGFblclD
HMjWMbBVfnnbMbnzMpFhlNSNFFSDcDGSzN
LnLLqjnBMjMngHbnWrTgZsCsgZvvvQrvQs
RCFCCJQbCQcprRlHHPpHhd
tWWLwvswfvZshgqDpdpBgfdf
mZtvZtMpjZzwWFjJTcQQbjjnSQ
fBfVwtttLDFctDtwFPWfTppWfmHCHdJhdChT
bGMRsbsvMQSSzMzZSNzsZvRNWTZJlmgZTJJdhhmppHTJCgTg
jssjNSSGMsQHbsRvHNPjtDcDcLPPPPDwLDDV
pClhQjJccrpbpqHhMhVhSMqHPt
dBZGZdgBzRsBsvMwGGVPVqMGwtVH
ZvDddZvDBdDdDmgCmVmbbCNpCCbljW
DTMCpdCnwRDwdfMCDDCssfZmGrBrjpttjrNrgctmGpGr
VVqJQgSSWzhPGGrPtNNQtm
bFvhgWzHJlDdffswTvRd
jwCCPPTtCswCCNTsqRNbMqQMVvVzMMMQSGvQqn
hprHlmFcHcdhWWLchZzHrLMvvnBvJJSBJMVMnnmMnMMJ
WppLcZdHWHplZWlDHhHTfzRzCCsTTtNNgtjgDw
vhmDFcDZmczMrwcqrMrmDFrvggtVSWgtSNwsjBtNVSnBsjsS
dbbRJHbpCWBBpZVgSS
LZLdHlClPmqLGDvMDv
mFbWsvsJVtbbRwfTSP
BGpQllhLGqhplBGZBfLMTSTLwwfwMJwMPT
GlDnDpQZlZZpZBlpWDNcmrgrWmNdNJvc
zbtqTtHQbZZpqbPpvGJdvQdhrhQjdQGs
qDFLLSNqcWwsGhGDJh
LgBcfnFCSFnLccggSVCVtHZlpqPPtTRMftHMbMzb
hzrrWnzRZRnbWVRzjcRHMDdqqQdNMHqHQQjlHM
sGCpCtppBfCTgwBBCwPBCssQqMQvNlSMMQDQNqHGHvDSbQ
tpLFPgfbCsfbzzcnJhRhZLhc
qzzGqfpFvWFmRSPjPjRP
cwwVssBMtNMNLngstgVBnrsPmHSJJmjllhQdQldmhdrjQJ
nDVSsLwcVcMnBGzTDDCvpvfzGT
bcTbbcZGZLPgTMWZpLLDQnrvPVnVmmjmRPFVrF
HJCJqlzBdsSjzCJRmlrlrnVQQDFnVF
BfwffNdNswLtbWbNcpjt
smJwSNNFMzFNDrvbrbfJHvbl
BRQjqZQcBhrbTsbTnfcn
ZLQRZRBjjPWSsmCdSWMgSN
NhwlDpbWggdSBvBggLFg
fRrZsVfjqljmsQQVmmsnFMFSBLLRvFTFMBSvFF
QfqVVzcsQmcQqrcsNwzzzPphHlwNppPH
nnFdsjVdmpBsBVFHzjpvlTfQdPcQQPGPcvlGPv
DWMDCCWbNJhLtMgJMNLgtMgQflZQlfQGjZZhQZGhTfQcQP
rCrtJJgLLMbgDgMDWNRrWRnzsjpFzBzSHmmqHmqnHH
rmjjJmmdwSmGhdsjJtsgGNzFWQFnBFVWHdFQcLLcNz
RCCbfRlvvPfvCTnHLLnNbNLczHnQ
lqZTllRRpDMlpfZRvgQpSmwwtggQjJgtpS
LDsGvTSSsswCwTrLZDqQWHMWbphlHMpGGpQz
RRPfPRccBdVjPcFlpMpMQWzMWfpF
RjPRjRtczcNBJRSCtLDTvTSDCCST
pqQNgNnSntwgqzzQCzNwCNBRcWtBjZcZGrBMcHMGvWcr
mmJdJPFVbJbPPGZbMRbvvrjcMj
lTMVVlLPfLNQhpgqLSLn
HlBHFrgBvlfzFzqvnvFqpCJbJfQpQpLcmhbcmtmm
jDjPGsRRTMMPjdJmjmLpCLth
MRMZMWsNpFFFVFHW
RGgwWcppGSWcWSRWmGdWcttHQFJHfbQwBQJTJQBQfJ
njjZZCMlCZjqMBFbJQZHJHBQft
DsjCPDDvjFNsMNjNqpGspcsGSmcpccrGWS
cVwMZGVZwHNPgPwRZwHttThlHllvlzQpptzppl
DsCWdqLdDCnfJLSCqsqWRsBdlhjlhzlttzQhhtvlhnhhhbzT
JCWWRWCrLDDdBdLsSsLLSCrCNZMVcmMZMFwMZwNZPZVGFPmr
hhPzDzPhPNbfpzhBbdNbDhttzqWtwttHWwntjqmwmWFm
LgGZSdMMrgTLrZLdgLSgsGTFFjrWtFFmmmFtWjqHFnFtjn
vZgdLvZLZQLRQZQQdMZLdQvVpRhNNPfJDbcBbbhVNJNNhf
`

checkBags(input, 2)