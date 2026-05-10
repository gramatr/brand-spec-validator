#!/usr/bin/env bash
# Sync the vendored brand-spec/brand.yaml from upstream.
#
# This validator pins to a specific brand-spec version. When upstream
# ships a new version that this validator should validate against, run:
#
#   ./scripts/sync-spec.sh           # pulls main
#   ./scripts/sync-spec.sh v1.3      # pulls a specific tag/branch/sha
#
# After running, bump the validator's package.json version, update the
# README's supported-version note, and commit the result. See
# CONTRIBUTING.md > "Spec version + sync" for the full procedure.

set -euo pipefail

REF="${1:-main}"
URL="https://raw.githubusercontent.com/gramatr/brand-spec/${REF}/brand.yaml"
DEST_DIR="$(cd "$(dirname "$0")/.." && pwd)/vendor/brand-spec"
DEST="${DEST_DIR}/brand.yaml"

mkdir -p "${DEST_DIR}"

echo "Fetching ${URL}"
TMP="$(mktemp)"
trap 'rm -f "${TMP}"' EXIT

if ! curl -fsSL "${URL}" -o "${TMP}"; then
  echo "error: failed to download ${URL}" >&2
  exit 1
fi

if [ ! -s "${TMP}" ]; then
  echo "error: downloaded brand.yaml is empty" >&2
  exit 1
fi

mv "${TMP}" "${DEST}"
trap - EXIT

echo "Wrote $(wc -l < "${DEST}") lines to ${DEST}"
echo
echo "Next steps:"
echo "  1. Review the diff: git diff vendor/brand-spec/brand.yaml"
echo "  2. Run the test suite: npm test"
echo "  3. Bump package.json version + update README + CHANGELOG"
echo "  4. Commit"
