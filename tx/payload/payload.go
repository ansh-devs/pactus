package payload

import (
	"fmt"

	"github.com/zarbchain/zarb-go/crypto"
)

type PayloadType int

const (
	PayloadTypeSend = PayloadType(1)
	PayloadTypeBond = PayloadType(2)
)

func (t PayloadType) String() string {
	switch t {
	case PayloadTypeSend:
		return "send"
	case PayloadTypeBond:
		return "bond"
	}
	return fmt.Sprintf("%d", t)
}

type Payload interface {
	Signer() crypto.Address
	Value() int64
	SanityCheck() error
	Type() PayloadType
	Fingerprint() string
}
